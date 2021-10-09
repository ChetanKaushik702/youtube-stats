import axios from 'axios'

const API_KEY = "AIzaSyDLUZEHqS3YsK3KfwWtPv25onpYWXG0USM";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet, contentDetails, statistics",
        key: API_KEY
    }
})