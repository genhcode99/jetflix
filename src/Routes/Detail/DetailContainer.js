import React from "react";
import { moviesApi, tvApi } from "../../api"
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor (props) {
    super(props);
    const { location : { pathname }} = props;
    this.state = {
      result : null,
      logoPath : null,
      error : null,
      loading : true,
      isMovie: pathname.includes("/movie")
    };
  };

  async componentDidMount () {
    const { id } = this.props.match.params;
    const { push } = this.props.history;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
      }
      this.setState({ error : "Can't find anything." })
    } finally {
      this.setState({ loading : false, result});
    }
    const arrayPath = await result.production_companies.map((company)=>company.logo_path);
    const logoPath = await arrayPath.filter((path) => path !== null);
    this.setState({logoPath});
  }


  render () {
    const {result, logoPath, error, loading} = this.state;
    return (
    <DetailPresenter 
      result={result} 
      error={error}
      loading={loading}
      logoPath={logoPath}
    />);
  }
}