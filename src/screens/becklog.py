import pandas as pd

# Dados da planilha de backlog de manutenção mecânica
data = {
    "Nº OS": [1, 2, 3],
    "Data de Solicitação": ["15/05/2025", "17/05/2025", "20/05/2025"],
    "Equipamento": ["Bomba A", "Motor B", "Compressor C"],
    "Localização": ["Setor 1", "Setor 2", "Setor 3"],
    "Tipo de Manutenção": ["Corretiva", "Preventiva", "Preditiva"],
    "Descrição do Problema": ["Vazamento de óleo", "Troca de rolamento", "Ruído anormal"],
    "Prioridade": ["Alta", "Média", "Alta"],
    "Status": ["Pendente", "Em andamento", "Pendente"],
    "Responsável": ["João Silva", "Carlos Souza", "Ana Lima"],
    "Data Prevista": ["25/05/2025", "23/05/2025", "28/05/2025"],
    "Observações": ["Aguardando peça", "", "Verificar vibração"]
}

# Criando o DataFrame
df_backlog = pd.DataFrame(data)

# Salvando em arquivo Excel
df_backlog.to_excel("Backlog_Manutencao_Mecanica.xlsx", index=False)

# Salvando em arquivo CSV
df_backlog.to_csv("Backlog_Manutencao_Mecanica.csv", index=False)
