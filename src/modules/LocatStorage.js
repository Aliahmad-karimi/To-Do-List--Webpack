export default class LocalDataStorage {
    static addToLocalDataStorage = (tasks) => {
        localStorage.setItem('To-Do-List', JSON.stringify(tasks));
    }
}