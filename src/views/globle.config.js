/*
 * @Description:  全局配置
 * @Author: BMB
 * @Date: 2020-12-24 12:03:27
 * @LastEditTime: 2020-12-24 12:13:19
 * @LastEditors: BMB
 */
const GCONF = {
    algorithmGroups: [{
            name: '选择排序',
            code: 'SlectAndSort'
        },
        {
            name: '递归',
            code: 'Recursion'
        },
        {
            name: '快速排序',
            code: 'QuickSort'
        },
        {
            name: '散列表',
            code: 'HashTable'
        },
        {
            name: '广度优先搜索',
            code: 'BFS'
        },
        {
            name: '狄克斯特拉算法',
            code: 'Dijkstra'
        },
        {
            name: '贪婪算法',
            code: 'Greedy '
        },
        {
            name: '动态规划',
            code: 'DynamicProgramming'
        },
        {
            name: 'K最近邻算法',
            code: 'KN'
        },
        {
            name: '其他',
            code: 'Other',
        },

    ],
    algorithms: [
        //1 二分法
        {
            name: '二分法',
            code: 'binarySearch',
            group: 'SlectAndSort'
        },
    ]
}
export default GCONF;