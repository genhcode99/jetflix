import React from "react";
import { moviesApi, tvApi } from "../../api"
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor (props) {
    super(props);
    const { location : { pathname}} = props;
    this.state = {
      result : null,
      error : null,
      loading : true,
      isMovie: pathname.includes("/movie")
    };
  };

  async componentDidMount () {
    const { id } = this.props.match.params;
    const { pathname } = this.props.location;
    const { push } = this.props.history;
    const { ismovie } = this.state;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (ismovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
      }
    } catch {
      this.setState({ error : "Can't find anything." })
    } finally {
      this.setState({ loading : false, result });
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