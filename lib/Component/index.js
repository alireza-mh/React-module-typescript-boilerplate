"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("./style.css");
/**
 * @param props: ISwipItemProps
 */
var SwipItem = function (props) {
    var _a = react_1.useState(null), startPosition = _a[0], setStartPosition = _a[1];
    var swipRef = react_1.useRef(null);
    var swipLeftRef = react_1.useRef(null);
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
    return (react_1.default.createElement("div", { className: 'swip-item-wrapper' },
        react_1.default.createElement("div", { ref: swipLeftRef, className: 'swip-item__left-content' }, "text"),
        react_1.default.createElement("div", { ref: swipRef, className: "swip-item", onMouseDown: handleStartEvent, onMouseLeave: handleEndEvent, onMouseMove: startPosition && handleMoveEvent(startPosition), onMouseUp: handleEndEvent },
            react_1.default.createElement("div", { className: "full-width" }))));
};
SwipItem.defaultProps = {};
exports.default = SwipItem;
//# sourceMappingURL=index.js.map