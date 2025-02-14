```javascript
// useVModel.js
import { computed } from "vue";

export default function useVModle(props, propName, emit) {
    return computed({
        get() {
            return new Proxy(props[propName], {
                get(target, key) {
                    return Reflect.get(target, key)
                },
                set(target, key, newValue) {
                    emit('update:' + propName, {
                        ...target,
                        [key]: newValue
                    })
                    return true
                }
            })
        },
        set(value) {
            emit('update:' + propName, value)
        }
    })
}

const emit = defineEmits(["update:modelValue"])
const form = useVModel(props, "modelValue", emit)

```

##### 参考链接

[妙用computed拦截v-model，面试官都夸我细](https://juejin.cn/post/7277089907974422588?searchId=2024121314362240EC390B07A71A875114)