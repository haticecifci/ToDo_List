/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'App',
methods: {
switchStatus(item) {
const idx: this;
}, : .data.findIndex((x) => x.id === item.id),
this: .data[idx].complate = !item.complate
},
onKeyDown(e) {
if (e.which === 13) {
clearTimeout(this.intervalid);
this.animationActive = true;
this.data.push({
id: Date.now(),
text: this.model,
complate: false
});
this.model = "";
this.intervalid = setTimeout(() => {
this.animationActive = false;
}, 2000);
}
}
});
