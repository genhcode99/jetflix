import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor (prpos) {
    super

  }
  state = {
    result : null,
    error : null,
    loading : true,
  };

  async componentDidMount () {
    const { id } = this.props.match.params;
    const { pathname } = this.props.location;
    const { push } = this.props.history;
    this.isMovie = pathname.includes("/movie/");
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) {
      return push("/");
    }

  }


  render () {
    const {result, error, loading} = this.state;
    return (
    <DetailPresenter 
      result={result} 
      error={error}
      loading={loading}
    />);
  }
}