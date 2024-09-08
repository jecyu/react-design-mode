import React from "react";
import Row from "./Row";
import { ThemeContext, LocaleContext } from "./context";

export default class Greeting extends React.Component {
  constructor(props: { name: string }) {
    super(props);
    this.state = {
      name: "Harry",
      surname: "Potter",
      width: window.innerWidth
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }
  componentDidMount(): void {
      document.title = this.state.name + " " + this.state.surname;
      window.addEventListener("resize", this.handleWindowResize);
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot: any): void {
    document.title = this.state.name + " " + this.state.surname;
  }
  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleWindowResize);
  }
  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  }
  handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ surname: event.target.value });
  }
  handleWindowResize = () => {
    this.setState({ width: window.innerWidth });
  }
  render() {
    return (
      <ThemeContext.Consumer>
      {
        theme => (
          <section className={theme}>
          <Row label="Name">
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </Row>
          <Row label="Surname">
            <input type="text" value={this.state.surname} onChange={this.handleSurnameChange} />
          </Row>
          <LocaleContext.Consumer>
            {
              locale => (
                <Row label="Language">
                  {locale}
                </Row>
              )
            }
          </LocaleContext.Consumer>
          <Row label="Width">
            {this.state.width}
          </Row>
          </section>
        )
      }
      </ThemeContext.Consumer>
    );
  }
}