/*
 * @Description: 常见排序算法(从小到大)
 * @Author: BMB
 * @Date: 2020-12-29 10:34:34
 * @LastEditTime: 2021-01-05 08:29:51
 * @LastEditors: BMB
 */
const Sort = {
    /**
     * @description
     * 名称： 普通排序。
     * 时间复杂度:O(n*n*n)。
     * 思路：
     * 1、遍历数组，找到最小值；
     * 2、并取出最小值（原数组删除这个最小值）；
     * @param {Array} data 需要排序的数组 
     * @return {Array} result 排序结果。
     */
    normalSort: (data) => {
        const getMin = (data) => {
            let min = data[0];
            for (let i = 1; i < data.length; i++) {
                if (min > data[i]) {
                    min = data[i];
                }
            }
            return min;
        }
        let result = [];
        while (data.length > 0) {
            let min = getMin(data);
            result.push(min);
            for (let i = 0; i < data.length; i++) {
                if (data[i] == min) {
                    data.splice(i, 1);
                    break;
                }
            }
        }
        return result;
    },
    /**
     * @description: 冒泡排序 
     * @时间复杂度 O（n*n）       
     * @param {Array} data
     * @return {null}
     */
    bubbleSort: data => {
        for (let i = 0; i < data.length; i++) {
            for (let j = data.length; j > i; j--) {
                if (data[i] > data[j]) {
                    let min = data[j];
                    let max = data[i];
                    data[i] = min;
                    data[j] = max;
                }
            }
        }
    },
    /**
     * @description 选择排序
     * @时间复杂度 O(n)~O(n*n)
     * @param {Array} data 
     * @return {*}
     */
    slectionSort: data => {

        const getMin = (data) => {
            let min = data[0];
            let index = 0;
            for (let i = 1; i < data.length; i++) {
                if (min > data[i]) {
                    min = data[i];
                    index = i;
                }
            }
            return index;
        }

        // 每次将最小值防止顶部
        for (let j = 0; j < data.length; j++) {
            let _data = data.filter((e, index) => index >= j);
            let min_index = getMin(_data);
            // 这里需要需要加上前半段的
            let min = data[min_index + j];
            let cur = data[j];
            data[j] = min;
            data[min_index + j] = cur;
        }

    },

    /**
     * @description: 网络版选择排序
     * @时间复杂度 O(n*n)     
     * @return {null}
     * @param {Aarry} data
     */

    slectionSort_Other(data) {
        for (let i = 0; i < data.length; i++) {
            let minIndex = i;
            // 寻找每轮最小值，有点像冒泡
            for (let j = i + 1; j < data.length; j++) {
                if (data[j] < data[minIndex]) {
                    minIndex = j;
                }

            }
            // 最小值与每轮遍历首位元素进行兑换顺序
            if (minIndex != i) {
                let cur = data[i];
                let min = data[minIndex];
                // 这里是每轮的首位
                data[i] = min;
                // 每轮最小值位置
                data[minIndex] = cur;
            }
        }
    },
    /**
     * @description: 插入排序
     * @时间复杂度 O(n*n) 
     * @return {*}
     * @param {Array} data
     */
    insertSort(data) {
        for (let i = 0; i < data.length; i++) {
            for (let j = i; j >= 0; j--) {
                // 相邻元素做对比
                if (data[j] < data[j - 1]) {
                    let cur = data[j - 1];
                    let min = data[j];
                    data[j - 1] = min;
                    data[j] = cur;
                }
            }

        }
    }

}
export default Sort;