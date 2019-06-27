class App extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/aboutme">Home</Link></li>
                        <li><Link to="/aboutme">Work Experience</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/aboutme" component={Home} />
                    <Route path="/aboutme" component={WorkExperience} />

                </Switch>

            </div>
        );
    }
}
export default App;
