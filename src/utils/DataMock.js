

const listados = [
    {
        id:1,
        nombre:'Batman',
        titulo:'Una muerte en la Familia',
        precio:'$1.800',
        stock:1,
        imagen:'01.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'

    },
    {
        id:2,
        nombre:'Spiderman',
        titulo:'La última Caceria de Kraven',
        precio:'$1.500',
        stock:5,
        imagen:'02.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:3,
        nombre:'Slam Dunk',
        titulo:'Tomo #1 DELUXE',
        precio:'$1.200',
        stock:3,
        imagen:'03.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:4,
        nombre:'Batman',
        titulo:'La broma asesina',
        precio:'$1.600',
        stock:4,
        imagen:'04.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
        
    },
    {
        id:5,
        nombre:'Spiderman',
        titulo:'La muerte de los Stacy',
        precio:'$1.300',
        stock:5,
        imagen:'05.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:6,
        nombre:'Slam Dunk',
        titulo:'Tomo #2 DELUXE',
        precio:'$1.200',
        stock:7,
        imagen:'06.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:7,
        nombre:'Batman',
        titulo:'El regreso del caballero oscuro',
        precio:'$1.900',
        stock:8,
        imagen:'07.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'

    },
    {
        id:8,
        nombre:'Avengers',
        titulo:'Fear Itself - LIBRO I',
        precio:'$1.100',
        stock:35,
        imagen:'08.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:9,
        nombre:'Slam Dunk',
        titulo:'Tomo #3 DELUXE',
        precio:'$1.200',
        stock:23,
        imagen:'09.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:10,
        nombre:'Batman',
        titulo:'Asilo Arkham',
        precio:'$1.800',
        stock:10,
        imagen:'10.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'

    },
    {
        id:11,
        nombre:'Avengers',
        titulo:'Fear Itself - LIBRO II',
        precio:'$1.100',
        stock:15,
        imagen:'11.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:12,
        nombre:'Slam Dunk',
        titulo:'Tomo #4 DELUXE',
        precio:'$1.200',
        stock:13,
        imagen:'12.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:13,
        nombre:'Batman',
        titulo:'Año UNO',
        precio:'$1.800',
        stock:10,
        imagen:'13.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'

    },
    {
        id:14,
        nombre:'Avengers',
        titulo:'Fear Itself - LIBRO II',
        precio:'$1.100',
        stock:8,
        imagen:'14.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:15,
        nombre:'Slam Dunk',
        titulo:'Tomo #5 DELUXE',
        precio:'$1.200',
        stock:6,
        imagen:'15.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:16,
        nombre:'Flash',
        titulo:'Flash Point',
        precio:'$1.200',
        stock:7,
        imagen:'16.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:17,
        nombre:'Avengers',
        titulo:'Invasión Secreta',
        precio:'$1.900',
        stock:8,
        imagen:'17.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'

    },
    {
        id:18,
        nombre:'Demon Slayer',
        titulo:'Kimetsu no Yaiba',
        precio:'$600',
        stock:35,
        imagen:'18.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:19,
        nombre:'JLA',
        titulo:'Crisis en tierras infinitas',
        precio:'$1.200',
        stock:23,
        imagen:'19.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:20,
        nombre:'X-Men',
        titulo:'Dinastía M',
        precio:'$1.800',
        stock:10,
        imagen:'20.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'

    },
    {
        id:21,
        nombre:'Demon Slayer',
        titulo:'Kimetsu no Yaiba',
        precio:'$600',
        stock:15,
        imagen:'21.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:22,
        nombre:'JLA',
        titulo:'Kingdom Come',
        precio:'$1.200',
        stock:13,
        imagen:'22.jpg',
        categoria:'dc',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    },
    {
        id:23,
        nombre:'Avengers',
        titulo:'El Guantalete del Infinito',
        precio:'$1.800',
        stock:10,
        imagen:'23.jpg',
        categoria:'marvel',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'

    },
    {
        id:24,
        nombre:'Demon Slayer',
        titulo:'Kimetsu no Yaiba',
        precio:'$600',
        stock:8,
        imagen:'24.jpg',
        categoria:'ivrea',
        detalle:'El legendario equipo creativo compuesto por J. M. DeMatteis y Mike Zeck elaboran la historia definitiva de venganza, en esta revolucionaria e inigualable saga, considerada la mejor aventura moderna de Spiderman. Kraven El Cazador ha acechado y acabado con la vida de todos los animales conocidos por el hombre. Pero hay una bestia que se le resiste: una que se burló de él en cada encuentro: el superhéroe conocido como Spiderman. Ahora el tiempo de jugar ha terminado. Acabará con la araña, la enterrará y se convertirá en ella. Empieza la Última Cacería de Kraven.'
    }
] 

export default listados;
