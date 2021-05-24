const API_KEY = "7aabe2761b524f5a889fafd05730ae8e";

export const currentWeahterToday = async (name, data, set_error) => {
  try {
    set_error({});
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lang=pl&city=${name}&key=${API_KEY}&include=minutely`
    );

    const responseJson = await response.json();
    if (!responseJson) {
      return console.log("nie ma takiego miasta");
    }
    return data(responseJson.data);
  } catch (err) {
    set_error(err);
    console.log(err);
  }
};
