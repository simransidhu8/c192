AFRAME.registerComponent("drive", {
    init: function(){
        this.driveCar()
    },

    driveCar: function(){
        var wheelRotation=0
        var multiply=10
        window.addEventListener("keydown", function(e){
            var wheel = document.querySelector("#steering-wheel")

            if(e.code=="ArrowRight" && wheelRotation>-40){
                wheelRotation-=5
                wheel.setAttribute("rotation", {x:0, y:0, z:wheelRotation})
            }

            if(e.code=="ArrowLeft" && wheelRotation>40){
                wheelRotation+=5
                wheel.setAttribute('rotation', {x:0, y:0, z:wheelRotation})
            }

            var camera = document.querySelector("#camera")
            var direction = new THREE.Vector3()
            camera.object3D.getWorldDirection(direction)

            if(e.code==="ArrowUp"){
                multiply+=0.5
                var accelator = document.querySelector('#acc')
                accelator.setAttribute("velocity", {x:0, y: 0, z:multiply})
                accelator.setAttribute("material", "color", "green")
                
            }
        })
    }
})