import axios from "axios";

export function register(body) {
  return axios.post(`/merchant/create`, body);
}

export function login(body) {
  return axios.post(`/login`, body);
}

export function addProduct() {
  return axios.get(`/merchant/product/add`);
}

export function getProducts(merchant_id) {
  return axios.get(`/merchant/product/all/${merchant_id}`);
}

export function createBidEvent(body) {
  return axios.post(`merchant/bidding`, body);
}

export function getBidEvents(merchant_id) {
  return axios.get(`/merchant/bidding/${merchant_id}`);
}

export function getBidEventWinner(bidding_event_id) {
  return axios.get(`/merchant/bidding/winner/${bidding_event_id}`);
}

export function updateBidEvent(event_id, body) {
  return axios.patch(`/merchant/bidding/${event_id}`, body);
}

export function getBidEventsByStatus(body) {
  return axios.post(`/merchant/bidding/status`, body);
}

export function getWithdrawalRequests(merchant_id) {
  return axios.get(`/merchant/request/${merchant_id}`);
}

export function withdrawalRequest(body) {
  return axios.post(`/merchant/request/send`, body);
}

export function cancelWithdrawalRequest(body) {
  return axios.post(`/merchant/request/cancel`, body);
}

export function getBalance(merchant_id) {
  return axios.get(`/merchant/wallet/${merchant_id}`);
}

export function requestAccountVerification(body) {
  return axios.post(`/merchant/verify/request`, body);
}

export function resolveAccountVerification(body) {
  return axios.post(`/merchant/verify/resolve`, body);
}
