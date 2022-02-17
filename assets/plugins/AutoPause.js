class AutoPause {
    constructor(){
        this.threshold = 0.50;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilyChange = this.handleVisibilyChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, { 
            threshold: this.threshold
        });

        observer.observe(player.media);

        document.addEventListener('visibilitychange', this.handleVisibilyChange);
    }

    handleIntersection(entries) {
        const entry = entries[0];

        if(entry.intersectionRatio >= this.threshold){
            this.player.play();
        }else{
            this.player.pause();
        }
    }

    handleVisibilyChange() {
        const isVisible = document.visibilityState === 'visible';

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        } 
    }
}

export default AutoPause;