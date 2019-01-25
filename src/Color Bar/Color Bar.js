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
        "textMain-color": "#E0E0E0"
      },
      light: {
        "main-color": "#ffffff",
        "secondary-color": "#fbfbfb",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#2c503e",
        "vGit-color": "#2c3e50",
        "vMore-color": "#502c3e",
        "textMain-color": "#505050"
      },
      yellow: {
        "main-color": "#f9ed69",
        "secondary-color": "#fbfbfb",
        "modalThird-color": "#E0E0E0",
        "vSite-color": "#f08a5d",
        "vGit-color": "#b83b5e",
        "vMore-color": "#6a2c70",
        "textMain-color": "#505050"
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
        }
  };

  render() {
    return (
        <div className="colorBarContainer">
            <div className="colorBarItem darkTheme" onClick={this.themeSwitchHandler.bind(this, 'dark')} ></div>
            <div className="colorBarItem lightTheme" onClick={this.themeSwitchHandler.bind(this, "light")} ></div>
            <div className="colorBarItem yellowTheme" onClick={this.themeSwitchHandler.bind(this, "yellow")} ></div>
        </div>
    );
  }
}
