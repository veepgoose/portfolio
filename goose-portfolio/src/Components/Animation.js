import { animated } from '@react-spring/web';
import { useSpring, animated } from @react-spring/web';

export default function AnimatedTest() {
    const  springs - useSpring({
        from: { x: 0 },
        to: { x: 100 }, 
     })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: 'hotpink',
        borderRadius: 8,
        ...springs,
      }}
    />
    )
  }

  export default AnimatedTest;
