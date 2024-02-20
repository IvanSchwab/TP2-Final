class XMemoryDao{
    constructor(){
         this.memory = ["kuka", "canela"];
    }

    create = async (info) => {
         try {
           this.memory.push(info);
           return await info;
         } catch (error) {
           throw error;
         }
       };
    getAll = async () => {
         try {
          const info= await this.memory.join(" ")
           return info;
         } catch (error) {
           throw error;
         }
       };
       getAmount= async (amount) => {
         try {
          const info= await fetch(`https://texto.deno.dev/palabras?cantidad=${amount}`)
          const data= await info.json()
           return data;
         } catch (error) {
           throw error;
         }
       };
}
export default XMemoryDao