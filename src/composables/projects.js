import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

export default function useProjects() {
    const projects = ref([]);
    const project = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getProjects = async () => {
        const response = await axios.get("projects");
        projects.value = response.data.data;
    };

    const getProject = async (id) => {
        const response = await axios.get("/project" + id);
        project.value = response.data.data;
    };

    const projectStore = async (data) => {
        try {
            await axios.post("projects", data);
            await router.push({ name: "ProjectsIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateProject = async (id) => {
        try {
            await axios.put("projects/" + id, project.value);
            await router.push({ name: "ProjectsIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyProject = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("projects/" + id);
        await getProjects();
    };

    return {
        project,
        projects,
        getProject,
        getProjects,
        projectStore, // Corrigido o nome da função
        updateProject,
        destroyProject,
        errors,
    };
}
