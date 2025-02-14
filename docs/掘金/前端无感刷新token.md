`Access_token + Refresh_token`双Token机制

<img src="/Users/sundong/Library/Application Support/typora-user-images/image-20241114161047892.png" alt="image-20241114161047892" style="zoom: 67%;" />

```javascript
interface PendingTask {
    config: AxiosRequestConfig
    resolve: Function
}

let refreshing = false;
const queue: PendingTask[] = [];

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        let { data, config } = error.response;

        if(refreshing) {
            return new Promise((resolve) => {
                queue.push({
                    config,
                    resolve
                });
            });
        }

        if (data.statusCode === 401 && !config.url.includes('/refresh')) {
            refreshing = true;
            
            const res = await refreshToken();

            refreshing = false;

            if(res.status === 200) {

                queue.forEach(({config, resolve}) => {
                    resolve(axiosInstance(config))       // 重新发送当前失败的请求（401错误的请求）
                })

                return axiosInstance(config);
            } else {
                alert(data || '登录过期，请重新登录');
            }
        } else {
            return error.response;
        }
    }
)

axiosInstance.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('access_token');

    if(accessToken) {
        config.headers.authorization = 'Bearer ' + accessToken;
    }
    return config;
})


```

```javascript
async function refreshToken() {
    const res = await axiosInstance.get('/refresh', {
        params: {
          token: localStorage.getItem('refresh_token')
        }
    });
    localStorage.setItem('access_token', res.data.accessToken);
    localStorage.setItem('refresh_token', res.data.refreshToken);
    
    return res;
}
```

