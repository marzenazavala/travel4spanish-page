import { notification } from 'antd';

const notify = (type, msg, desc, placement) => {
    notification.destroy();
    notification[type]({
        message: msg,
        description: desc,
        placement
    })
}

export default notify;