<template>
  <component
    :is="iconComponent"
    :class="['inline-block min-w-6 min-h-6', _class]"
  />
</template>

<script lang="ts">
import SearchIcon from "./icon-search.vue"
import ChevronDownIcon from "./icon-chevron-down.vue"
import FileOpenIcon from "./icon-file-open.vue"
import TimerIcon from "./icon-timer.vue"
import UserGroupIcon from "./icon-user-group.vue"
import IconDownload from "./icon-download.vue"
import IconBarsFilter from "./icon-bars-filter.vue"
import IconCircleInfo from "./icon-circle-info.vue"

const icons: any = {
  search: SearchIcon,
  "chevron-down": ChevronDownIcon,
  "file-open": FileOpenIcon,
  timer: TimerIcon,
  "user-group": UserGroupIcon,
  download: IconDownload,
  "bars-filter": IconBarsFilter,
  "circle-info": IconCircleInfo,
}

export default {
  props: {
    class: String,
    name: {
      type: String,
      required: true,
      validator(value: any) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      },
    },
  },

  computed: {
    _class() {
      return this.class
    },
    iconComponent() {
      return icons[this.name]
    },
  },
}
</script>
