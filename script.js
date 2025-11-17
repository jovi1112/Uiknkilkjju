const habilidades = [
    "Red Teaming avanzado",
    "Blue Team / Defensa",
    "Explotación de vulnerabilidades 0-day",
    "Ciberinteligencia y OSINT",
    "Automatización ofensiva",
    "Criptografía aplicada y criptoanálisis",
    "Machine Learning para seguridad",
    "Desarrollo de exploits y malware ético"
];

const herramientas = [
    "Cobalt Strike",
    "Metasploit Pro",
    "BloodHound",
    "Empire",
    "Wireshark",
    "tcpdump",
    "Zeek",
    "John the Ripper",
    "Hashcat",
    "CyberChef",
    "Autopsy",
    "Volatility",
    "Python",
    "Go",
    "Rust",
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "Solidity",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible"
];

const proyectos = [
    { nombre: "Simulación de ataque corporativo", descripcion: "Ejecución de un ataque Red Team completo con evasión AV, escalamiento de privilegios y reportes ejecutivos." },
    { nombre: "Automatización de auditorías web", descripcion: "Scripts avanzados que detectan vulnerabilidades y generan reportes completos." },
    { nombre: "Herramienta de detección de anomalías", descripcion: "Uso de ML para monitoreo de tráfico de red y alertas en tiempo real." },
    { nombre: "Explotación segura de binarios", descripcion: "Análisis de programas críticos para detectar vulnerabilidades y parchearlas." },
    { nombre: "Blockchain Security", descripcion: "Auditoría de contratos inteligentes y detección de exploits en Solidity." }
];

const habilidadesLista = document.getElementById("habilidades-lista");
habilidades.forEach(h => {
    const div = document.createElement("div");
    div.classList.add("habilidad");
    div.textContent = h;
    habilidadesLista.appendChild(div);
});

const herramientasLista = document.getElementById("herramientas-lista");
herramientas.forEach(h => {
    const div = document.createElement("div");
    div.classList.add("herramienta");
    div.textContent = h;
    herramientasLista.appendChild(div);
});

const proyectosLista = document.getElementById("proyectos-lista");
proyectos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("proyecto");
    div.innerHTML = `<h3>${p.nombre}</h3><p>${p.descripcion}</p>`;
    proyectosLista.appendChild(div);
});
