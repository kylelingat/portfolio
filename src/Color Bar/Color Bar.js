import React, { Component } from "react";
import "./Color Bar.css";

export default class ColorBar extends Component {
  state = {
    currTheme: "dark",
    themes: {
      dark: {
        "main-color": "#222431",
        "secondary-color": "#272C39",
        "modalThird-color": "#39445c",
        "vSite-color": "#608cac",
        "vGit-color": "#3c82e7",
        "vMore-color": "#e74c3c",
        "textMain-color": "#E0E0E0",
        "textProject-color": "#E0E0E0",
        "backTop-color": "#222431"
      },
      light: {
        "main-color": "#ffffff",
        "secondary-color": "#fbfbfb",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#2c503e",
        "vGit-color": "#2c3e50",
        "vMore-color": "#502c3e",
        "textMain-color": "#505050",
        "textProject-color": "#000000",
        "backTop-color": "#E0E0E0"
      },
      yellow: {
        "main-color": "#f9ed69",
        "secondary-color": "#fbfbfb",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#f08a5d",
        "vGit-color": "#b83b5e",
        "vMore-color": "#6a2c70",
        "textMain-color": "#ffffff",
        "textProject-color": "#000000",
        "backTop-color": "#f9ed69"
      },
      red: {
        "main-color": "#e23e57",
        "secondary-color": "#ffffff",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#f9ed69",
        "vGit-color": "#522546",
        "vMore-color": "#311d3f",
        "textMain-color": "#E0E0E0",
        "textProject-color": "#000000",
        "backTop-color": "#e23e57"
      },
      blue: {
        "main-color": "#3ec1d3",
        "secondary-color": "#ffffff",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#f08a5d",
        "vGit-color": "#ff9a00",
        "vMore-color": "#ff165d",
        "textMain-color": "#ffffff",
        "textProject-color": "#000000",
        "backTop-color": "#3ec1d3"
      },
      orange: {
        "main-color": "#ff8f56",
        "secondary-color": "#ffffff",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#ff5959",
        "vGit-color": "#984a59",
        "vMore-color": "#60424c",
        "textMain-color": "#ffffff",
        "textProject-color": "#000000",
        "backTop-color": "#ff8f56"
      },
      green: {
        "main-color": "#20716a",
        "secondary-color": "#ffffff",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#acdeaa",
        "vGit-color": "#8fbbaf",
        "vMore-color": "#f8d0b0",
        "textMain-color": "#ffffff",
        "textProject-color": "#000000",
        "backTop-color": "#20716a"
      },
      violet: {
        "main-color": "#5d50c6",
        "secondary-color": "#ffffff",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#f85e9f",
        "vGit-color": "#f18fac",
        "vMore-color": "#facd49",
        "textMain-color": "#ffffff",
        "textProject-color": "#000000",
        "backTop-color": "#5d50c6"
      }
    }
  };

  setTheme = () => {
    const theme = this.state.themes[this.state.currTheme];
    console.log(theme);
    Object.keys(theme).forEach(key => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    });
  };

  themeSwitchHandler = color => {
    if (color === "light") {
      this.setState(
        {
          currTheme: "light"
        },
        this.setTheme
      );
    } else if (color === "dark") {
      this.setState(
        {
          currTheme: "dark"
        },
        this.setTheme
      );
    } else if (color === "yellow") {
      this.setState(
        {
          currTheme: "yellow"
        },
        this.setTheme
      );
    } else if (color === "red") {
      this.setState(
        {
          currTheme: "red"
        },
        this.setTheme
      );
    } else if (color === "blue") {
      this.setState(
        {
          currTheme: "blue"
        },
        this.setTheme
      );
    } else if (color === "orange") {
      this.setState(
        {
          currTheme: "orange"
        },
        this.setTheme
      );
    } else if (color === "green") {
      this.setState(
        {
          currTheme: "green"
        },
        this.setTheme
      );
    } else if (color === "violet") {
        this.setState(
          {
            currTheme: "violet"
          },
          this.setTheme
        );
      }
  };

  render() {
    return (
      <div className="colorBarContainer">
        <div
          className="colorBarItem redTheme"
          onClick={this.themeSwitchHandler.bind(this, "red")}
        />
        <div
          className="colorBarItem orangeTheme"
          onClick={this.themeSwitchHandler.bind(this, "orange")}
        />
        <div
          className="colorBarItem yellowTheme"
          onClick={this.themeSwitchHandler.bind(this, "yellow")}
        />
        <div
          className="colorBarItem greenTheme"
          onClick={this.themeSwitchHandler.bind(this, "green")}
        />
        <div
          className="colorBarItem blueTheme"
          onClick={this.themeSwitchHandler.bind(this, "blue")}
        />
        <div
          className="colorBarItem darkTheme"
          onClick={this.themeSwitchHandler.bind(this, "dark")}
        />
        <div
          className="colorBarItem violetTheme"
          onClick={this.themeSwitchHandler.bind(this, "violet")}
        />
        <div
          className="colorBarItem lightTheme"
          onClick={this.themeSwitchHandler.bind(this, "light")}
        />
      </div>
    );
  }
}
