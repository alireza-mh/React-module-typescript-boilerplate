import React, { useRef, useState } from 'react';
import './style.css';
/**
 * @param props: ISwipItemProps
 */
var SwipItem = function (props) {
    var _a = useState(null), startPosition = _a[0], setStartPosition = _a[1];
    var swipRef = useRef(null);
    var swipLeftRef = useRef(null);
    var handleStartEvent = function (e) {
        setStartPosition(e.clientX);
        swipRef.current.style.transition = "";
        swipLeftRef.current.style.transition = "";
    };
    var handleMoveEvent = function (startPosition) { return function (e) {
        var movement = (e.clientX - startPosition) / 2;
        swipRef.current.style.transform = "translateX(" + movement + "px)";
        movement > 0 && (swipLeftRef.current.style.width = movement + "px");
    }; };
    var handleEndEvent = function (e) {
        setStartPosition(null);
        swipLeftRef.current.style.width = "0";
        swipLeftRef.current.style.transition = "all ease-in 0.3s";
        swipRef.current.style.transition = "all ease-in 0.3s";
        swipRef.current.style.transform = "translateX(0)";
    };
    return (React.createElement("div", { className: 'swip-item-wrapper' },
        React.createElement("div", { ref: swipLeftRef, className: 'swip-item__left-content' }, "text"),
        React.createElement("div", { ref: swipRef, className: "swip-item", onMouseDown: handleStartEvent, onMouseLeave: handleEndEvent, onMouseMove: startPosition && handleMoveEvent(startPosition), onMouseUp: handleEndEvent },
            React.createElement("div", { className: "full-width" }))));
};
SwipItem.defaultProps = {};
export default SwipItem;
//# sourceMappingURL=index.js.map