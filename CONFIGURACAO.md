# 📱 Configuração do Quiz CineStream

## 🔧 Configurações Necessárias

### 1. **Número de WhatsApp**
Edite o arquivo: `src/components/WhatsAppButton.jsx`

```javascript
const WHATSAPP_NUMBER = '5511999999999' // ALTERE AQUI
```

**Formato:** Código do país + DDD + Número (sem espaços, traços ou parênteses)
- Exemplo Brasil: `5511987654321`
- Exemplo: 55 (Brasil) + 11 (SP) + 987654321

### 2. **Facebook Pixel**
Edite o arquivo: `src/App.jsx` (linha 16)

```javascript
initFacebookPixel('SEU_PIXEL_ID_AQUI')
```

Para obter seu Pixel ID:
1. Acesse Facebook Business Manager
2. Eventos > Pixels
3. Copie o ID do pixel

### 3. **Google Analytics**
Edite o arquivo: `src/App.jsx` (linha 17)

```javascript
initGoogleAnalytics('SEU_GA_ID_AQUI')
```

Formato: `G-XXXXXXXXXX` ou `UA-XXXXXXXXX-X`

### 4. **Logo**
Salve sua logo como: `public/logo.png`

Formatos aceitos: PNG, JPG, SVG
Tamanho recomendado: 400x400px (transparente)

### 5. **Link de Checkout (Opcional)**
Edite o arquivo: `src/App.jsx` (linha 69)

```javascript
window.open('https://cinestream.com/checkout', '_blank')
```

Substitua pela URL do seu checkout (Hotmart, Kiwify, etc.)

---

## 🚀 Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 📊 Eventos Rastreados

- `PageView` - Visualização da página
- `QuizStarted` - Início do quiz
- `QuizCompleted` - Quiz finalizado
- `Lead` - Lead capturado
- `LeadSkipped` - Lead pulou formulário
- `CheckoutClicked` - Clique no checkout alternativo

---

## 💡 Dicas de Conversão

### **Atendimento no WhatsApp:**
Quando receber o lead, responda:

1. **Saudação personalizada**
   "Oi [Nome]! Vi que você fez o quiz e tem interesse no CineStream 🎬"

2. **Confirme a economia**
   "Pelo seu perfil, você economizaria R$ [valor]/ano! Incrível, né?"

3. **Tire objeções**
   - Como funciona na minha TV?
   - Tem garantia?
   - Quais canais/filmes tem?

4. **Crie urgência**
   "Hoje temos uma condição especial para quem vem do quiz..."

5. **Envie o link de pagamento**
   Use link rastreável para saber de onde veio

---

## 🎯 Otimização para Facebook Ads

### **Público-Alvo Recomendado:**
- Idade: 25-55 anos
- Interesses: Netflix, Streaming, Filmes, Séries
- Comportamento: Compradores online

### **Criativos:**
- Use vídeo mostrando a interface
- Destaque "Plano Vitalício"
- Mostre economia vs streamings tradicionais

### **Orçamento Inicial:**
- R$ 50-100/dia para teste
- Objetivo: Conversões (Leads)

---

## 📞 Suporte

Qualquer dúvida na configuração, consulte a documentação ou entre em contato.
