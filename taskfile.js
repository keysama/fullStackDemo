module.exports = {
    *default(task,opts){
        yield task.source('src/**').target('dist');
        console.log('default')
    }
}