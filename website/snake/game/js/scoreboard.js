var PLAYERS = [
    {
        name: "Mary Miller",
        score: 22,
        id: 1
    },
    {
        name: "Ellie Grace",
        score: 20,
        id: 2
    },
    {
        name: "Ben Pine",
        score: 18,
        id: 3
    },
    {
        name: "Rachel Slater",
        score: 17,
        id: 4
    },
    {
        name: "Lisette Ven",
        score: 10,
        id: 5
    }];
var nextId = 6;
var AddPlayerForm = React.createClass({
    displayName: "AddPlayerForm",
    propTypes: {
        onAdd: React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            name: ""
        };
    },
    onNameChange: function (e) {
        this.setState({ name: e.target.value });
    },
    onSubmit: function (e) {
        e.preventDefault();

        this.props.onAdd(this.state.name);
        this.setState({ name: "" });
    },
    render: function () {
        return (
            React.createElement("div", { className: "add-player-form" },
                React.createElement("form", { onSubmit: this.onSubmit },
                    React.createElement("input", { type: "text", value: this.state.name, onChange: this.onNameChange }),
                    React.createElement("input", { type: "submit", value: "Add Player" }))));
    }
});
function Header(props) {
    return (
        React.createElement("div", { className: "header" },
            React.createElement("h1", null, props.title)));


}
Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
};
function Counter(props) {
    return (
        React.createElement("div", { className: "counter" },
            React.createElement("button", { className: "counter-action decrement", onClick: function () { props.onChange(-1); } }, " - "),
            React.createElement("div", { className: "counter-score" }, " ", props.score, " "),
            React.createElement("button", { className: "counter-action increment", onClick: function () { props.onChange(1); } }, " + ")));


}
Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};
function Player(props) {
    return (
        React.createElement("div", { className: "player" },
            React.createElement("div", { className: "player-name" },
                React.createElement("a", { className: "remove-player", onClick: props.onRemove }, "\u2716"),
                props.name),
            React.createElement("div", { className: "player-score" },
                React.createElement(Counter, { score: props.score, onChange: props.onScoreChange }))));
}
Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
};

var Application = React.createClass({
    displayName: "Application",
    propTypes: {
        title: React.PropTypes.string,
        initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            score: React.PropTypes.number.isRequired,
            id: React.PropTypes.number.isRequired
        })).
            isRequired
    },
    getDefaultProps: function () {
        return {
            title: "Top Scores"
        };
    },
    getInitialState: function () {
        return {
            players: this.props.initialPlayers
        };

    },
    onScoreChange: function (index, delta) {
        let players = [...this.state.players];
        players[index].score += delta;
        players = players.sort((a, b) => b.score - a.score);
        this.setState({ players });
    },
    onPlayerAdd: function (name) {
        this.state.players.push({
            name: name,
            score: 0,
            id: nextId
        });

        this.setState(this.state);
        nextId += 1;
    },
    onRemovePlayer: function (index) {
        this.state.players.splice(index, 1);
        this.setState(this.state);
    },
    render: function () {
        return (
            React.createElement("div", { className: "scoreboard" },
                React.createElement(Header, { title: this.props.title, players: this.state.players }),
                React.createElement("div", { className: "players" },
                    this.state.players.map(function (player, index) {
                        return (
                            React.createElement(Player, {
                                onScoreChange: function (delta) { this.onScoreChange(index, delta); }.bind(this),
                                onRemove: function () { this.onRemovePlayer(index); }.bind(this),
                                name: player.name,
                                score: player.score,
                                key: player.id
                            }));
                    }.bind(this))),
                React.createElement(AddPlayerForm, { onAdd: this.onPlayerAdd })));
    }
});
ReactDOM.render(React.createElement(Application, { initialPlayers: PLAYERS }), document.getElementById('container'));

console.log("Tests  ");