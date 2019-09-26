import React, { useRef, useState } from 'react';
import './style.css';

/**
 * @interface SwipItem Component IProps
 */
interface ISwipItemProps extends React.HTMLProps<HTMLDivElement> {}

/**
 * @param props: ISwipItemProps
 */
const SwipItem: React.FC<ISwipItemProps> = (props: ISwipItemProps) => {
    const [startPosition, setStartPosition] = useState(null);
    const swipRef = useRef(null);
    const swipLeftRef = useRef(null);
    const handleStartEvent = e => {
        setStartPosition(e.clientX);
        swipRef.current.style.transition = ``;
        swipLeftRef.current.style.transition = ``;
    };
    const handleMoveEvent = (startPosition) => e => {
        const movement = (e.clientX - startPosition) / 2;
        swipRef.current.style.transform = `translateX(${movement}px)`;
        movement > 0 && (swipLeftRef.current.style.width = `${movement}px`);
    };
    const handleEndEvent = e => {
        setStartPosition(null);
        swipLeftRef.current.style.width = `0`;
        swipLeftRef.current.style.transition = `all ease-in 0.3s`;
        swipRef.current.style.transition = `all ease-in 0.3s`;
        swipRef.current.style.transform = `translateX(0)`;
    };
    return (
        <div className='swip-item-wrapper'>
            <div  ref={swipLeftRef}className='swip-item__left-content'>text</div>
            <div
                ref={swipRef}
                className="swip-item"
                onMouseDown={handleStartEvent}
                onMouseLeave={handleEndEvent}
                onMouseMove={startPosition && handleMoveEvent(startPosition)}
                onMouseUp={handleEndEvent}
            ><div className="full-width"></div>
            </div>
        </div>
    );
};

SwipItem.defaultProps = {};

export default SwipItem;
