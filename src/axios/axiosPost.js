import axios from 'axios';

const url = 'https://api.unsplash.com/photos/?client_id=gG8KyJv0AZDILSshYX698vmYIr7BRoY8YhAp4204who';

export const axiosPost = async () => {
    const result = await axios.get(url).then(res => res.data);
    return result;
}