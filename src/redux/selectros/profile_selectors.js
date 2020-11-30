const getUserProfileSelector = state => state.userProfile;
const getStatusSelector = state => state.status;
const getUserIdSelector = state => state.auth.userId;

export { getUserProfileSelector, getStatusSelector, getUserIdSelector };