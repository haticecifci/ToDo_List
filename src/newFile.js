/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'App',
methods: {
onKeyDown(e) {
if (e.which === 13) {
this.data.push({
id: Date.now(),
text: this.model,
complate: false
});
this.model = "";
}
}
},
data() {
return {
model: '',
data: []
};
},
components: {}
});
