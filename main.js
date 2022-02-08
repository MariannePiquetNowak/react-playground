var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helloWorld = React.createElement('h1', {}, 'Hello world!');

// const firstName = 'r0ulito';
// const lastName = 'formateur';


// Solution sans bonus
// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;


function Span(props) {
    return React.createElement(
        'span',
        { className: props.className },
        props.children
    );
}

function FirstName(props) {
    return React.createElement(
        Span,
        null,
        props.name[0].toUpperCase() + props.name.slice(1),
        ' '
    );
}

function LastName(props) {
    return React.createElement(
        Span,
        { className: props.className },
        props.name
    );
}

var Hello = function (_React$Component) {
    _inherits(Hello, _React$Component);

    function Hello(props) {
        _classCallCheck(this, Hello);

        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));
    }

    _createClass(Hello, [{
        key: 'render',
        value: function render() {
            var firstName = 'r0ulito';
            var lastName = 'formateur';

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello'
                ),
                React.createElement(FirstName, { name: firstName }),
                React.createElement(LastName, { name: lastName, className: 'red-text' })
            );
        }
    }]);

    return Hello;
}(React.Component);

ReactDOM.render(React.createElement(Hello, null), document.querySelector('#app'));