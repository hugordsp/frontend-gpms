<script setup>
import useProjects from '../../composables/projects';
import { onMounted } from 'vue';

const { projects, getProjects } = useProjects();

onMounted(() => getProjects()); 
</script>
<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Project Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Start Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        End Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Value
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">
                        {{ project.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ project.start_date }}
                    </td>
                    <td class="px-6 py-4">
                        {{ project.end_date }}
                    </td>
                    <td class="px-6 py-4">
                        ${{ project.value }}.00
                    </td>
                    <td class="px-6 py-4">
                        {{ project.status }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>