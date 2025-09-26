import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    });

    console.log('\n🔍 Usuarios registrados en la base de datos:');
    console.log('================================================');
    
    if (users.length === 0) {
      console.log('❌ No hay usuarios registrados aún.');
    } else {
      users.forEach((user, index) => {
        console.log(`\n👤 Usuario ${index + 1}:`);
        console.log(`   ID: ${user.id}`);
        console.log(`   Email: ${user.email}`);
        console.log(`   Username: ${user.username}`);
        console.log(`   Nombre: ${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`);
        console.log(`   Rol: ${user.role}`);
        console.log(`   Activo: ${user.isActive ? '✅' : '❌'}`);
        console.log(`   Registrado: ${user.createdAt.toLocaleString()}`);
      });
    }
    
    console.log(`\n📊 Total de usuarios: ${users.length}`);
    
  } catch (error) {
    console.error('❌ Error al consultar usuarios:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkUsers();