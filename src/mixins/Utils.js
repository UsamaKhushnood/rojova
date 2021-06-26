export default{
	methods:{

	},
	filters : {
		formatText(value){

			if(!value){return}

			return value.toString().toLowerCase()
			.replace(/_/g, ' ')
			.replace(/(?: |\b)(\w)/g, function(key, p1) {
			    return key.toUpperCase();    
			});
		}
	}
}