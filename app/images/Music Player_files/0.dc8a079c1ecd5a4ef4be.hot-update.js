webpackHotUpdate(0,{

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(38);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(280);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(284);

var _index4 = _interopRequireDefault(_index3);

var _jquery = __webpack_require__(124);

var _jquery2 = _interopRequireDefault(_jquery);

var _jPlayer = __webpack_require__(286);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _countryStyle = __webpack_require__(287);

var _countryStyle2 = _interopRequireDefault(_countryStyle);

__webpack_require__(288);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var duration = null;

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

		_this.progressChangeHandler = function (progress) {
			(0, _jquery2.default)('#player').jPlayer('play', duration * progress);
		};

		_this.state = {
			progress: '-'
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			(0, _jquery2.default)("#player").jPlayer({
				ready: function ready(event) {
					(0, _jquery2.default)("#player").jPlayer("setMedia", {
						title: "test1或者小城大事",
						mp3: _countryStyle2.default
					}).jPlayer('play');
				},
				//swfPath: "../../dist/jplayer", // jquery.jplayer.swf 文件存放的位置
				supplied: "mp3"
				//wmode: "window", // 设置Flash 的wmode，具体设置参见文档说明，写window 就好了
				// useStateClassSkin: true, // 默认情况下，播放和静音状态下的dom 元素会添加class jp-state-playing, jp-state-muted 这些状态会对应一些皮肤，是否使用这些状态对应的皮肤。
				// autoBlur: false, // 点击之后自动失去焦点
				// smoothPlayBar: true, // 平滑过渡
				// keyEnabled: true, // 是否允许键盘控制播放
				// remainingDuration: true, // 是否显示剩余播放时间,如果为false 那么duration 那个dom显示的是【3:07】,如果为true 显示的为【-3:07】
				// toggleDuration: true //允许点击剩余时间的dom 时切换 剩余播放时间的方式，比如从【3:07】点击变成【-3：07】如果设置为false ,那么点击无效，只能显示remainingDuration 设置的方式。
			});
			(0, _jquery2.default)('#player').bind(_jquery2.default.jPlayer.event.timeupdate, function (event) {
				duration = event.jPlayer.status.duration;
				_this2.setState({
					//progress: Math.round(event.jPlayer.status.currentTime)    //显示时间
					progress: event.jPlayer.status.currentPercentAbsolute
				});
			});
		}
	}, {
		key: 'componentWillUnMount',
		value: function componentWillUnMount() {
			(0, _jquery2.default)('#player').unbind(_jquery2.default.jPlayer.event.timeupdate);
		}
	}, {
		key: 'render',
		value: function render() {
			//console.log('progress: ' + this.state.progress)
			return _react2.default.createElement(
				'div',
				{ className: 'home' },
				_react2.default.createElement(_index2.default, null),
				_react2.default.createElement(_index4.default, {
					progress: this.state.progress,
					progressChangeHandler: this.progressChangeHandler
					//bgColor = '#f00'
				})
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50L2hvbWUvaW5kZXguanMiXSwibmFtZXMiOlsiZHVyYXRpb24iLCJIb21lIiwicHJvZ3Jlc3NDaGFuZ2VIYW5kbGVyIiwialBsYXllciIsInByb2dyZXNzIiwic3RhdGUiLCJyZWFkeSIsImV2ZW50IiwidGl0bGUiLCJtcDMiLCJzdXBwbGllZCIsImJpbmQiLCJ0aW1ldXBkYXRlIiwic3RhdHVzIiwic2V0U3RhdGUiLCJjdXJyZW50UGVyY2VudEFic29sdXRlIiwidW5iaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFdBQVcsSUFBZjs7SUFDcUJDLEk7OztBQUNwQixpQkFBYztBQUFBOztBQUFBOztBQUFBLFFBbUNkQyxxQkFuQ2MsR0FtQ1Usb0JBQVk7QUFDbkMseUJBQUUsU0FBRixFQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCSCxXQUFXSSxRQUF4QztBQUNBLEdBckNhOztBQUViLFFBQUtDLEtBQUwsR0FBYTtBQUNaRCxhQUFVO0FBREUsR0FBYjtBQUZhO0FBS2I7Ozs7c0NBQ21CO0FBQUE7O0FBQ25CLHlCQUFFLFNBQUYsRUFBYUQsT0FBYixDQUFxQjtBQUNwQkcsV0FBTyxlQUFVQyxLQUFWLEVBQWlCO0FBQ3ZCLDJCQUFFLFNBQUYsRUFBYUosT0FBYixDQUFxQixVQUFyQixFQUFpQztBQUNoQ0ssYUFBTyxhQUR5QjtBQUVoQ0M7QUFGZ0MsTUFBakMsRUFHR04sT0FISCxDQUdXLE1BSFg7QUFJQSxLQU5tQjtBQU9wQjtBQUNBTyxjQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmb0IsSUFBckI7QUFpQkEseUJBQUUsU0FBRixFQUFhQyxJQUFiLENBQWtCLGlCQUFFUixPQUFGLENBQVVJLEtBQVYsQ0FBZ0JLLFVBQWxDLEVBQThDLFVBQUNMLEtBQUQsRUFBVztBQUN4RFAsZUFBV08sTUFBTUosT0FBTixDQUFjVSxNQUFkLENBQXFCYixRQUFoQztBQUNBLFdBQUtjLFFBQUwsQ0FBYztBQUNiO0FBQ0FWLGVBQVVHLE1BQU1KLE9BQU4sQ0FBY1UsTUFBZCxDQUFxQkU7QUFGbEIsS0FBZDtBQUlBLElBTkQ7QUFPQTs7O3lDQUNzQjtBQUN0Qix5QkFBRSxTQUFGLEVBQWFDLE1BQWIsQ0FBb0IsaUJBQUViLE9BQUYsQ0FBVUksS0FBVixDQUFnQkssVUFBcEM7QUFDQTs7OzJCQUlRO0FBQ1I7QUFDQSxVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsTUFBZjtBQUNDLHdEQUREO0FBRUM7QUFDSSxlQUFhLEtBQUtQLEtBQUwsQ0FBV0QsUUFENUI7QUFFSSw0QkFBMEIsS0FBS0Y7QUFDL0I7QUFISjtBQUZELElBREQ7QUFVQTs7OztFQW5EZ0MsZ0JBQU1lLFM7O2tCQUFuQmhCLEkiLCJmaWxlIjoiMC5kYzhhMDc5YzFlY2Q1YTRlZjRiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXIvaW5kZXguanMnXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi4vcHJvZ3Jlc3MvaW5kZXguanMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgalBsYXllciBmcm9tICdqUGxheWVyJ1xuaW1wb3J0IHRoZU11c2ljIGZyb20gJy4uLy4uL211c2ljL2NvdW50cnlTdHlsZS5tcDMnXG5cbmltcG9ydCAnLi9zdHlsZXMubGVzcydcblxubGV0IGR1cmF0aW9uID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwcm9ncmVzczogJy0nXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdCQoXCIjcGxheWVyXCIpLmpQbGF5ZXIoe1xuXHRcdFx0cmVhZHk6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHQkKFwiI3BsYXllclwiKS5qUGxheWVyKFwic2V0TWVkaWFcIiwge1xuXHRcdFx0XHRcdHRpdGxlOiBcInRlc3Qx5oiW6ICF5bCP5Z+O5aSn5LqLXCIsXG5cdFx0XHRcdFx0bXAzOiB0aGVNdXNpY1xuXHRcdFx0XHR9KS5qUGxheWVyKCdwbGF5Jyk7XG5cdFx0XHR9LFxuXHRcdFx0Ly9zd2ZQYXRoOiBcIi4uLy4uL2Rpc3QvanBsYXllclwiLCAvLyBqcXVlcnkuanBsYXllci5zd2Yg5paH5Lu25a2Y5pS+55qE5L2N572uXG5cdFx0XHRzdXBwbGllZDogXCJtcDNcIixcblx0XHRcdC8vd21vZGU6IFwid2luZG93XCIsIC8vIOiuvue9rkZsYXNoIOeahHdtb2Rl77yM5YW35L2T6K6+572u5Y+C6KeB5paH5qGj6K+05piO77yM5YaZd2luZG93IOWwseWlveS6hlxuXHRcdFx0Ly8gdXNlU3RhdGVDbGFzc1NraW46IHRydWUsIC8vIOm7mOiupOaDheWGteS4i++8jOaSreaUvuWSjOmdmemfs+eKtuaAgeS4i+eahGRvbSDlhYPntKDkvJrmt7vliqBjbGFzcyBqcC1zdGF0ZS1wbGF5aW5nLCBqcC1zdGF0ZS1tdXRlZCDov5nkupvnirbmgIHkvJrlr7nlupTkuIDkupvnmq7ogqTvvIzmmK/lkKbkvb/nlKjov5nkupvnirbmgIHlr7nlupTnmoTnmq7ogqTjgIJcblx0XHRcdC8vIGF1dG9CbHVyOiBmYWxzZSwgLy8g54K55Ye75LmL5ZCO6Ieq5Yqo5aSx5Y6754Sm54K5XG5cdFx0XHQvLyBzbW9vdGhQbGF5QmFyOiB0cnVlLCAvLyDlubPmu5Hov4fmuKFcblx0XHRcdC8vIGtleUVuYWJsZWQ6IHRydWUsIC8vIOaYr+WQpuWFgeiuuOmUruebmOaOp+WItuaSreaUvlxuXHRcdFx0Ly8gcmVtYWluaW5nRHVyYXRpb246IHRydWUsIC8vIOaYr+WQpuaYvuekuuWJqeS9meaSreaUvuaXtumXtCzlpoLmnpzkuLpmYWxzZSDpgqPkuYhkdXJhdGlvbiDpgqPkuKpkb23mmL7npLrnmoTmmK/jgJAzOjA344CRLOWmguaenOS4unRydWUg5pi+56S655qE5Li644CQLTM6MDfjgJFcblx0XHRcdC8vIHRvZ2dsZUR1cmF0aW9uOiB0cnVlIC8v5YWB6K6454K55Ye75Ymp5L2Z5pe26Ze055qEZG9tIOaXtuWIh+aNoiDliankvZnmkq3mlL7ml7bpl7TnmoTmlrnlvI/vvIzmr5TlpoLku47jgJAzOjA344CR54K55Ye75Y+Y5oiQ44CQLTPvvJowN+OAkeWmguaenOiuvue9ruS4umZhbHNlICzpgqPkuYjngrnlh7vml6DmlYjvvIzlj6rog73mmL7npLpyZW1haW5pbmdEdXJhdGlvbiDorr7nva7nmoTmlrnlvI/jgIJcblx0XHR9KTtcblx0XHQkKCcjcGxheWVyJykuYmluZCgkLmpQbGF5ZXIuZXZlbnQudGltZXVwZGF0ZSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRkdXJhdGlvbiA9IGV2ZW50LmpQbGF5ZXIuc3RhdHVzLmR1cmF0aW9uO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdC8vcHJvZ3Jlc3M6IE1hdGgucm91bmQoZXZlbnQualBsYXllci5zdGF0dXMuY3VycmVudFRpbWUpICAgIC8v5pi+56S65pe26Ze0XG5cdFx0XHRcdHByb2dyZXNzOiBldmVudC5qUGxheWVyLnN0YXR1cy5jdXJyZW50UGVyY2VudEFic29sdXRlXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRjb21wb25lbnRXaWxsVW5Nb3VudCgpIHtcblx0XHQkKCcjcGxheWVyJykudW5iaW5kKCQualBsYXllci5ldmVudC50aW1ldXBkYXRlKTtcblx0fVxuXHRwcm9ncmVzc0NoYW5nZUhhbmRsZXIgPSBwcm9ncmVzcyA9PiB7XG5cdFx0JCgnI3BsYXllcicpLmpQbGF5ZXIoJ3BsYXknLCBkdXJhdGlvbiAqIHByb2dyZXNzKVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHQvL2NvbnNvbGUubG9nKCdwcm9ncmVzczogJyArIHRoaXMuc3RhdGUucHJvZ3Jlc3MpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxQcm9ncmVzcyBcblx0XHRcdFx0ICAgIHByb2dyZXNzID0geyB0aGlzLnN0YXRlLnByb2dyZXNzIH1cblx0XHRcdFx0ICAgIHByb2dyZXNzQ2hhbmdlSGFuZGxlciA9IHsgdGhpcy5wcm9ncmVzc0NoYW5nZUhhbmRsZXIgfVxuXHRcdFx0XHQgICAgLy9iZ0NvbG9yID0gJyNmMDAnXG5cdFx0XHRcdD48L1Byb2dyZXNzPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudC9ob21lL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==