import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';
import { AbstractEntity } from './abstract.entity';
import { Guild } from './guild.entity';

@Entity('members')
export class Member extends AbstractEntity {
  @PrimaryColumn()
  userId: string;

  @PrimaryColumn()
  guildId: string;

  @ManyToMany(() => User, (user) => user.guilds, { primary: true })
  @JoinColumn({ name: 'userId' })
  user: Promise<User>;

  @ManyToMany(() => Guild, (guild) => guild.members, { primary: true })
  @JoinColumn({ name: 'guildId' })
  guild: Promise<Guild>;

  @Column('boolean', { default: false })
  admin: boolean;
}