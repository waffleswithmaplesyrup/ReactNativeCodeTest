import { Dimensions, View, ViewToken } from "react-native"
import { ImageSliderType } from "../data/SliderData"
import SliderItem from "./SliderItem"
import Animated, { 
  scrollTo, 
  useAnimatedRef, 
  useAnimatedScrollHandler, 
  useDerivedValue, 
  useSharedValue } from "react-native-reanimated";
import Pagination from "./Pagination";
import { useEffect, useRef, useState } from "react";

type Props = {
  itemList: ImageSliderType[],
  autoPlayOn: boolean,
};

const { width } = Dimensions.get("screen");

const Slider = ({ itemList, autoPlayOn }: Props) => {
  const scrollX = useSharedValue(0);

  const [paginationIndex, setPaginationIndex] = useState(0);
  const [data, setData] = useState(itemList);

  // for autoplay
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlayOn);
  const interval = useRef<NodeJS.Timeout>();
  const offset = useSharedValue(0);

  if (autoPlayOn) {
    useEffect(() => {
      if (isAutoPlay) {
        interval.current = setInterval(() => {
          offset.value = offset.value + width;
        }, 5000)
      } else {
        clearInterval(interval.current);
      }
  
      return () => {
        clearInterval(interval.current);
      }
    }, [isAutoPlay, offset, width]);
  }

  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true);
  });

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offset.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({viewableItems}: {viewableItems: ViewToken[]}) => {
    if( viewableItems[0].index !== undefined 
      && viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index % itemList.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged }
  ]);

  return (
    <View>
      <Animated.FlatList
        ref={ref}
        data={data}
        renderItem={({ item, index }) => (
        <SliderItem autoPlayOn={autoPlayOn} item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...itemList])}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => setIsAutoPlay(false)}
        onScrollEndDrag={() => setIsAutoPlay(true)}
      />
      {
        autoPlayOn &&
        <View
          style={{
            position: "relative",
            bottom: 50,
            marginBottom: -50,
          }}
        >
          <Pagination items={itemList} scrollX={scrollX} paginationIndex={paginationIndex} />
        </View>
      }
    </View>
  )
}

export default Slider
