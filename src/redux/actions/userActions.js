export const actionTypes = {
  WHISHLISTED: "WHISHLISTED",
  NOTWHISHLISTED: "NOTWHISHLISTED",
  USERDATA: "USERDATA",
};

export function whishlist(data) {
  console.log(data, "dtytytytytyt");
  return {
    type: actionTypes.WHISHLISTED,
    payload: data,
  };
}
export function removeWhishListed(data) {
  return {
    type: actionTypes.NOTWHISHLISTED,
    payload: data,
  };
}

export function userData(data) {
  return {
    type: actionTypes.USERDATA,
    payload: data,
  };
}
