import { defineNuxtPlugin } from '#imports'
import { Sortable } from 'sortablejs-vue3'
import SortableJS, { MultiDrag } from "sortablejs";
SortableJS.mount(new MultiDrag());

declare module '#app' {
	interface NuxtApp {
		$sortableInstance: SortableJS;
	}
}
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$sortableInstance: SortableJS;
	}
}


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Sortable', Sortable)
    nuxtApp.provide('sortableInstance', SortableJS)
})
