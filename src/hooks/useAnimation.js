import { useInView } from 'react-intersection-observer';
import { useSpring } from '@react-spring/web';


export function useAnimation(fromStyle, toStyle){
    const [ref, inView] = useInView({
        triggerOnce: false, 
        threshold: 0.2,    
      });
    
      const animation = useSpring({
        ...toStyle,
        from: fromStyle,
        config: { tension: 120, friction: 14 },
        immediate: !inView,
      });
    
      return [ref, animation];
}