class Api {
  static URL = "/api/v1";
  // News (posts) api calls
  static findAllPosts = async (queryParams = null) => {
    let url = `${this.URL}/posts`;
    if (queryParams !== null) {
      url +=
        (url.indexOf("?") === -1 ? "?" : "&") + this.queryParams(queryParams);
    }
    const response = await fetch(`${url}`);
    return await response.json();
  };

  static findOnePost = async id => {
    const response = await fetch(`${this.URL}/posts/${id}`);
    return await response.json();
  };

  static queryParams = params => {
    return Object.keys(params)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
  };

  //Projects api calls
  static findAllProjects = async (queryParams = null) => {
    let url = `${this.URL}/projects`;
    if (queryParams !== null) {
      url +=
        (url.indexOf("?") === -1 ? "?" : "&") + this.queryParams(queryParams);
    }
    const response = await fetch(`${url}`);
    return await response.json();
  };
  static findOneProject = async id => {
    const response = await fetch(`${this.URL}/projects/${id}`);
    return await response.json();
  };
  //Events api calls
  static findAllEvents = async (queryParams = null) => {
    let url = `${this.URL}/events`;
    if (queryParams !== null) {
      url +=
        (url.indexOf("?") === -1 ? "?" : "&") + this.queryParams(queryParams);
    }
    const response = await fetch(`${url}`);
    return await response.json();
  };
  static findOneEvent = async id => {
    const response = await fetch(`${this.URL}/events/${id}`);
    return await response.json();
  };
  //Team api calls
  static findTeam = async (queryParams = null) => {
    let url = `${this.URL}/team`;
    if (queryParams !== null) {
      url +=
        (url.indexOf("?") === -1 ? "?" : "&") + this.queryParams(queryParams);
    }
    const response = await fetch(`${url}`);
    return await response.json();
  };
  static findOneMember = async id => {
    const response = await fetch(`${this.URL}/team/${id}`);
    return await response.json();
  };

  //Testimonial api calls
  static findTestimonials = async (queryParams = null) => {
    let url = `${this.URL}/testimonials`;
    if (queryParams !== null) {
      url +=
        (url.indexOf("?") === -1 ? "?" : "&") + this.queryParams(queryParams);
    }
    const response = await fetch(`${url}`);
    return await response.json();
  };

  //Testemonial api calls
  static findOneTestimonial = async id => {
    let response = await fetch(`${this.URL}/testimonials/${id}`);
    return await response.json();
  };
  //Events api calls
  static findAllCourses = async (queryParams = null) => {
    let url = `${this.URL}/courses`;
    if (queryParams !== null) {
      url +=
        (url.indexOf("?") === -1 ? "?" : "&") + this.queryParams(queryParams);
    }
    const response = await fetch(`${url}`);
    return await response.json();
  };
}

export default Api;
