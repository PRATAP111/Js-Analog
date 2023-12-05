document.addEventListener('DOMContentLoaded', function () {
    // Create and set styles for the inner container (container)

    
    var get_body = document.getElementById('bodyId')

    // body css 
    get_body.style.display          = "flex"
    get_body.style.justifyContent   = "center"
    get_body.style.alignItems       = 'center';
    get_body.style.backgroundImage  = "url('/ass/time1.jpg')"
    get_body.style.backgroundSize   = 'cover'
    get_body.style.backgroundRepeat = 'no-repeat'
    get_body.style.height = '98vh'

    // creating css Container
    var container = document.createElement("div");
    container.id = "main_container";
    container.style.height = '23rem';
    container.style.width = '23rem';
    container.style.borderColor = 'rgba( 255, 255, 255, 0.25 )';
    container.style.borderWidth = '1rem'
    container.style.borderStyle = 'solid'
    container.style.borderRadius = '50%';

    container.style.backdropFilter = 'blur( 0.5px )'

    

    var semi_container = document.createElement('div')
    semi_container.id = 'semi_container'
    semi_container.style.backgroundColor = 'rgba( 255, 255, 255, 0.25 )'
    semi_container.style.height = '0.4rem'
    semi_container.style.width = '11rem'
    semi_container.style.borderRadius = '10px'
    semi_container.style.marginLeft = '5.2px'

    semi_container.style.transform  = 'rotate(90deg)'
    semi_container.style.transformOrigin = '100%'
    semi_container.style.transition = 'all linear 0.05s'
    // semi_container.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)'

    semi_container.style.position = 'absolute'
    semi_container.style.top = '50%'
    // semi_container.style.left = '50%'

    var semi_container_1 = document.createElement('div')
    semi_container_1.id = 'semi_container_1'
    semi_container_1.style.backgroundColor = 'rgba( 255, 255, 255, 0.25 )'
    semi_container_1.style.height = '0.4rem'
    semi_container_1.style.width = '11rem'
    semi_container_1.style.borderRadius = '10px'
    semi_container_1.style.marginLeft = '8px'

    semi_container_1.style.transform  = 'rotate(90deg)'
    semi_container_1.style.transformOrigin = '100%'
    semi_container_1.style.transition = 'all linear 0.05s'
    // semi_container_1.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)'

    semi_container_1.style.position = 'absolute'
    semi_container_1.style.top = '50%'

    var semi_container_2 = document.createElement('div')
    semi_container_2.id = 'semi_container_2'
    semi_container_2.style.backgroundColor = 'rgba( 255, 255, 255, 0.25 )'
    // semi_container_2.style.backgroundColor = 'black'
    semi_container_2.style.height = '0.4rem'
    semi_container_2.style.width = '11rem'
    semi_container_2.style.borderRadius = '10px'
    semi_container_2.style.marginLeft = '8px'

    semi_container_2.style.transform  = 'rotate(450deg)'
    semi_container_2.style.transformOrigin = '100%'
    semi_container_2.style.transition = 'all linear 0.05s'
    semi_container_2.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)'

    semi_container_2.style.position = 'absolute'
    semi_container_2.style.top = '50%'

    setInterval(function () {
        var get_current_date_time = new Date();

        var get_hors_degree = get_current_date_time.getHours()
        var get_min_degree = get_current_date_time.getMinutes()

        var get_sec_degree = get_current_date_time.getSeconds()

        semi_container.style.transform  = `rotate(${((get_hors_degree / 12) * 360) + 90}deg)` 

        semi_container_1.style.transform = `rotate(${((get_min_degree / 60) * 360) + 90}deg)` 

        console.log(`get_sec_degree`,get_sec_degree,`rotate(${((get_sec_degree / 60) * 360) + 90}deg)`)

        if( get_sec_degree === 0 ){
            semi_container_2.style.transform = `rotate(${450}deg)` 

        }
        else{
        semi_container_2.style.transform = `rotate(${((get_sec_degree / 60) * 360) + 90}deg)` 

        }
        

 
    }, 1000);

    document.body.appendChild(container);
    document.getElementById('main_container').appendChild(semi_container_2)
    document.getElementById('main_container').appendChild(semi_container_1)
    document.getElementById('main_container').appendChild(semi_container)

});
