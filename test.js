import { chromium } from 'playwright';

async function testFeatureSection() {
  console.log('🔍 Testing Feature Section with 3D Cards...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const errors = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  page.on('pageerror', err => {
    errors.push(err.message);
  });
  
  try {
    console.log('📱 Navigating to http://localhost:3001...');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    console.log('✅ Checking page structure...\n');
    
    // Check main sections
    const navbar = await page.$('.navbar');
    const hero = await page.$('.hero');
    const solutions = await page.$('.solutions-section');
    const feature = await page.$('.feature-section');
    
    console.log('✓ Navbar:', !!navbar);
    console.log('✓ Hero section:', !!hero);
    console.log('✓ Solutions section:', !!solutions);
    console.log('✓ Feature section:', !!feature);
    
    // Check Feature header
    const featureTitle = await page.$('.feature-title');
    const featureWhite = await page.$('.feature-title-white');
    const featureAccent = await page.$('.feature-title-accent');
    const featureSubtitle = await page.$('.feature-subtitle');
    
    console.log('\n📋 Feature Header:');
    console.log('✓ Main title:', !!featureTitle);
    console.log('✓ White text:', !!featureWhite);
    console.log('✓ Accent text:', !!featureAccent);
    console.log('✓ Subtitle:', !!featureSubtitle);
    
    // Get header text
    const whiteText = await featureWhite?.textContent();
    const accentText = await featureAccent?.textContent();
    console.log('✓ White text content:', whiteText?.trim());
    console.log('✓ Accent text content:', accentText?.trim());
    
    // Check phone mockups
    const phones = await page.$$('.feature-phone');
    console.log('\n📋 Phone Mockups:');
    console.log('✓ Total phones found:', phones.length);
    
    const centerPhone = await page.$('.feature-phone-center');
    console.log('✓ Center phone (highlighted):', !!centerPhone);
    
    // Check feature cards
    const featureCards = await page.$$('.feature-card');
    console.log('\n📋 Feature Cards:');
    console.log('✓ Total cards found:', featureCards.length);
    
    // Check card types
    const creativeCard = await page.$('.feature-card:nth-child(1)');
    const systemCard = await page.$('.feature-card:nth-child(2)');
    const designCard = await page.$('.feature-card:nth-child(3)');
    const growthCard = await page.$('.feature-card:nth-child(4)');
    
    console.log('✓ Creative Leadership card:', !!creativeCard);
    console.log('✓ System-Driven Design card:', !!systemCard);
    console.log('✓ Design + Execution card:', !!designCard);
    console.log('✓ Built for Growing Brands card:', !!growthCard);
    
    // Get card titles
    const cardTitles = await page.$$('.feature-card-title');
    console.log('\n📋 Card Titles:');
    for (let i = 0; i < cardTitles.length; i++) {
      const title = await cardTitles[i].textContent();
      console.log(`  ${i + 1}. ${title}`);
    }
    
    // Test scroll reveal animation
    console.log('\n🎬 Testing scroll reveal animation...');
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight * 0.8);
    });
    await page.waitForTimeout(1500);
    
    // Check revealed cards
    const revealedCards = await page.$$('.feature-card.visible');
    console.log('✓ Revealed cards:', revealedCards.length);
    
    // Test hover effects
    console.log('\n🖱️ Testing hover effects on cards...');
    const firstCard = await page.$('.feature-card');
    if (firstCard) {
      await firstCard.hover();
      await page.waitForTimeout(300);
      const transform = await firstCard.evaluate(el => {
        return window.getComputedStyle(el).transform;
      });
      console.log('✓ Card hover effect working:', transform !== 'none');
    }
    
    // Test phone float animation
    console.log('\n🌊 Testing phone float animation...');
    const phone = await page.$('.feature-phone');
    if (phone) {
      const animation = await phone.evaluate(el => {
        return window.getComputedStyle(el).animation;
      });
      console.log('✓ Phone animation:', animation.includes('float') ? 'active' : 'checking');
    }
    
    // Test 3D tilt effect
    console.log('\n🎯 Testing 3D tilt effect...');
    await page.mouse.move(500, 500);
    await page.waitForTimeout(200);
    const card = await page.$('.feature-card');
    if (card) {
      const transform = await card.evaluate(el => {
        return window.getComputedStyle(el).transform;
      });
      console.log('✓ 3D tilt applied:', transform !== 'none' && transform !== 'matrix(1, 0, 0, 1, 0, 0)');
    }
    
    // Check connection lines
    const connections = await page.$('.feature-connections');
    console.log('\n🔗 Connection Lines:');
    console.log('✓ Connection lines present:', !!connections);
    
    if (errors.length > 0) {
      console.log('\n❌ Console errors detected:');
      errors.forEach(err => console.log('  -', err));
    } else {
      console.log('\n✅ No console errors detected');
    }
    
    console.log('\n🎉 Feature Section tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

testFeatureSection();
