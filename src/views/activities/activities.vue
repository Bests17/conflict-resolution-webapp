<template>
  <Layout>
    <div class="max-w-[365px] py-7 mx-auto">
      <ActivityItem
        :key="activity.id"
        v-for="activity of activities"
        :activity="activity"
      />
    </div>
  </Layout>
</template>

<script lang="ts">
import Header from "../../components/header/header.vue"
import Layout from "../../components/layout/dash-layout/dash-layout.vue"
import ActivityItem, {
  ActivityType,
} from "../../components/activity/activity-tem.vue"

interface DataType {
  activities: ActivityType[]
}

export default {
  components: {
    Header,
    Layout,
    ActivityItem,
  },
  data(): DataType {
    return {
      activities: [
        {
          id: "1",
          type: "Uploaded",
          description: "file 'Grade 6 student list .Xls' to Category '1'",
          updatedAt: "Nov 10 2023 - 12:32:13 pm",
        },
        {
          id: "2",
          type: "Uploaded",
          description:
            "Uploaded file 'Grade 6 student list .Xls' to Category '1'",
          updatedAt: "Nov 10 2023 - 12:32:13 pm",
        },
      ],
    }
  },
}
</script>
