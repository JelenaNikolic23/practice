class Launch {
    constructor(launch) {
        this.success = launch.launch_success;
        this.missionName = launch.mission_name;
        this.details = launch.details;
    }
}

export default Launch;
