let lista = []
    let btn = document.getElementById("btn")
    let ul = document.getElementById("lista") 
    
    btn.onclick = () => {
        let texto = document.getElementById("item").value;
        
        if(texto == ""){
            alert("digite algo para adicionar a lista")
            return
        }

        lista.push(texto)
        lista.sort()

        ul.innerHTML = "";

        lista.forEach(element => {
            let li = document.createElement("li")
            li.textContent = element;

            ul.append(li);
        });
    }