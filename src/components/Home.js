import React, { Component } from "react";
import "../App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3080/api/v1/authen/")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items)

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="divLoader">
         
          <svg viewBox="0 0 100 100" width="10em" height="10em">
            <path
              ng-attr-d="{{config.pathCmd}}"
              ng-attr-fill="{{config.color}}"
              stroke="none"
              d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
              fill="#51CACC"
              transform="rotate(179.719 50 51)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 51;360 50 51"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </div>
      );
    } else {
      return (
        <div>
          <div className="s_App">
            <input type="text" name="s_movie" />
          </div>
          <div className="row bg-color App">
            {items.map((item, index) => (
              <div className="col-md-4 mb-5" key={index}>
                <div className="card h-100">
                  <div className="card-body" align="center">
                    <img
                      src={item.poster}
                      alt={item.title}
                      width={250}
                      height={300}
                    />
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-text">{item.plot}</p>
                  </div>
                  <div className="card-footer">
                    <a
                      href={"/detail/"}
                      className="btn btn-primary btn-sm"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
